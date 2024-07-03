type Task<T> = {
    id: string;
    metadata: Record<string, string>;
    taskFunction: () => Promise<T>;
};

class Semaphore {
    private tasks: (() => void)[] = [];
    private available: number;

    constructor(concurrency: number) {
        this.available = concurrency;
    }

    async acquire(): Promise<void> {
        if (this.available > 0) {
            this.available--;
            return;
        }
        return new Promise((resolve) => this.tasks.push(resolve));
    }

    release(): void {
        if (this.tasks.length > 0) {
            const next = this.tasks.shift();
            if (next) {
                next();
            }
        } else {
            this.available++;
        }
    }
}

class TaskManager<T> {
    private tasks: Map<string, Task<T>> = new Map();
    private semaphore: Semaphore;

    constructor(concurrency: number) {
        this.semaphore = new Semaphore(concurrency);
    }

    addTask(id: string, metadata: Record<string, string>, taskFunction: () => Promise<T>): void {
        if (this.tasks.has(id)) {
            throw new Error(`Task with ID ${id} already exists.`);
        }
        this.tasks.set(id, { id, metadata, taskFunction });
    }

    async executeTask(id: string): Promise<T> {
        const task = this.tasks.get(id);
        if (!task) {
            throw new Error(`Task with ID ${id} not found.`);
        }
        await this.semaphore.acquire();
        try {
            const result = await task.taskFunction();
            this.tasks.delete(id); // Optionally remove task after execution
            return result;
        } catch (error) {
            console.error(`Task with ID ${id} failed: ${error.message}`, error);
            throw new Error(`Task with ID ${id} failed: ${error.message}`);
        } finally {
            this.semaphore.release();
        }
    }

    getTaskMetadata(id: string): Record<string, string> {
        const task = this.tasks.get(id);
        if (!task) {
            throw new Error(`Task with ID ${id} not found.`);
        }
        return task.metadata;
    }

    listTasks(): string[] {
        return Array.from(this.tasks.keys());
    }
}

// Example usage
async function exampleTask(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(42);
            } else {
                reject(new Error("Random failure"));
            }
        }, 1000);
    });
}

const taskManager = new TaskManager<number>(2); // Limit concurrency to 2 tasks

taskManager.addTask('task1', { id: 'meta1', data: 'Example Task 1' }, exampleTask);
taskManager.addTask('task2', { id: 'meta2', data: 'Example Task 2' }, exampleTask);
taskManager.addTask('task3', { id: 'meta3', data: 'Example Task 3' }, exampleTask);

async function run() {
    try {
        const results = await Promise.all([
            taskManager.executeTask('task1'),
            taskManager.executeTask('task2'),
            taskManager.executeTask('task3'),
        ]);
        console.log(`Task results: ${results}`);

        console.log('Remaining tasks:', taskManager.listTasks());
    } catch (error) {
        console.error('An error occurred while running tasks:', error);
    }
}

run();

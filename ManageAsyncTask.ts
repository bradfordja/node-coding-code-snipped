type Task<T> = {
    id: string;
    metadata: Record<string, string>;
    taskFunction: () => Promise<T>;
};

class TaskManager<T> {
    private tasks: Map<string, Task<T>> = new Map();

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
        try {
            const result = await task.taskFunction();
            this.tasks.delete(id); // Optionally remove task after execution
            return result;
        } catch (error) {
            throw new Error(`Task with ID ${id} failed: ${error.message}`);
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
    return new Promise<number>((resolve) => {
        setTimeout(() => resolve(42), 1000);
    });
}

const taskManager = new TaskManager<number>();

taskManager.addTask('task1', { id: 'meta1', data: 'Example Task 1' }, exampleTask);
taskManager.addTask('task2', { id: 'meta2', data: 'Example Task 2' }, exampleTask);

async function run() {
    try {
        const result1 = await taskManager.executeTask('task1');
        console.log(`Task 1 result: ${result1}`);
        
        const result2 = await taskManager.executeTask('task2');
        console.log(`Task 2 result: ${result2}`);
        
        console.log('Remaining tasks:', taskManager.listTasks());
    } catch (error) {
        console.error(error.message);
    }
}

run();
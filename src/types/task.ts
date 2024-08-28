export type TTaskStatus = "in-progress" | "completed" | "pending";

export interface ITask {
 id: string;
 title: string;
 description: string;
 status: TTaskStatus;
 createdAt: Date;
}
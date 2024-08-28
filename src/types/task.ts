export type TTaskStatus = "in-progress" | "completed" | "pending";

export interface ITask {
 title: string;
 description: string;
 status: TTaskStatus;
}
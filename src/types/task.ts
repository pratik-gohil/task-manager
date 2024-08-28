export interface ITask {
 id: string;
 title: string;
 description: string;
 status: TTaskStatus;
 createdAt: Date;
}

export type TTaskStatus = "in-progress" | "completed" | "pending";

export type IStatusSelect = {
 [key in TTaskStatus]: string;
};
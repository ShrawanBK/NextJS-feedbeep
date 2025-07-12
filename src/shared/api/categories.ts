
import { Topic } from "../types";
import { mockTopics } from "./mock-data";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCategories = async (): Promise<Topic[]> => {
  await delay(300);
  return mockTopics;
};

import { tagStatus } from '../shared/tagsConstantes';

export default class Tag {
  constructor(name, createdAt = false, id = false) {
    const date = createdAt ? new Date(createdAt) : new Date();
    const now = date.toISOString();

    this.name = name;
    this.createdAt = now;
    this.id = id ? +id : date.getTime();
  }
}

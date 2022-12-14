import { getRepository } from "typeorm"
import { Category } from "./entities/Category"

type CategoryRequest = {
  name: string
  description: string

}

export class CreateCategoryService {
  
  async execute ({ name , description }:CategoryRequest ):Promise<Category> {
    
    cons repo = getRepository(Category)

    const category = repo.create({
      name,
      description
    })

    await repo.save(category)
  }
}
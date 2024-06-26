import { prisma } from '../../lib/prisma'

type CreateUserData = {
  name: string
  email: string
}

type UpdateUserData = {
  id: string
  name: string
  email: string
}

export class PrismaUserRepository {
  listAll() {
    return prisma.user.findMany()
  }

  create({ name, email }: CreateUserData) {
    return prisma.user.create({
      data: {
        name,
        email,
      },
    })
  }

  findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  update({ id, name, email }: UpdateUserData) {
    return prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    })
  }

  delete(id: string) {
    return prisma.user.delete({
      where: {
        id,
      },
    })
  }
}

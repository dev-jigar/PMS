const Roles = [
  {
    name: 'Admin',
  },
  {
    name: 'User',
  },
];
const Permissions = [
  {
    name: 'Read',
  },
  {
    name: 'Write',
  },
  {
    name: 'Update',
  },
  {
    name: 'Delete',
  },
];

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedRoles() {
  for (const roles of Roles) {
    await prisma.roles.create({
      data: roles,
    });
  }
}
seedRoles()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

async function seedPermissions() {
  for (const permissions of Permissions) {
    await prisma.permissions.create({
      data: permissions,
    });
  }
}
seedPermissions()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

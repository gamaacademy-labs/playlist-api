import { PrismaProvider } from '../providers/prisma.provider';

async function seedsRun() {
  const content = await new PrismaProvider().contents.create({
    data: {
      thumbnail:
        'https://st.depositphotos.com/1146092/4811/i/950/depositphotos_48115181-stock-photo-sleepyhead-selfie-dog.jpg',
      linkVideo: 'https://www.youtube.com/watch?v=Rria3r9nZsA',
      title: 'Conteudo legal',
    },
  });

  const contentData = [
    {
      contentId: content.id,
    },
  ];

  await new PrismaProvider().playlists.create({
    data: {
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      title: 'test',
      description: 'test',
      duration: 1000,
      level: 'MEDIUM',
      contents: {
        createMany: {
          data: contentData,
        },
      },
    },
  });
}

seedsRun();

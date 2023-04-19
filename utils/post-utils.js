import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';

const fullPath = path.join(process.cwd(), 'data', 'posts');

export function getPostData(fileName) {
  const postFile = fs.readFileSync(path.join(fullPath, fileName), 'utf-8');
  const { data, content } = matter(postFile);
  const postData = {
    ...data,
    date:
      typeof data.date !== 'string'
        ? data.date.toISOString()
        : new Date(data.date).toISOString(),
    content,
  };
  return postData;
}

export function getAllPosts() {
  const allPostsFileName = fs.readdirSync(fullPath);

  const allPostsData = allPostsFileName.map(fileName => {
    return getPostData(fileName);
  });

  return allPostsData;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const filteredPost = allPosts.filter(post => post.isFeatured);
  return filteredPost;
}

export const getAllFiles = () => {
  const allPostsFileName = fs.readdirSync(fullPath);
  return allPostsFileName;
};

export function removeFileExtension(fileName) {
  return fileName.replace(/\.[^.]+$/, '');
}

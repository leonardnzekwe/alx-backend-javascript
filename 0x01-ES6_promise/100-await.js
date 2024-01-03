import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1');
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

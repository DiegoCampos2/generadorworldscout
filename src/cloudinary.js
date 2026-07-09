// Configuración de Cloudinary
// Regístrate gratis en https://cloudinary.com/users/register/free
// Ve a Settings → Upload → Add upload preset (Unsigned)
// Copia tu Cloud Name y el nombre del Upload Preset aquí

export const CLOUDINARY_CONFIG = {
  cloudName: 'TU_CLOUD_NAME',          // Ejemplo: 'micloud123'
  uploadPreset: 'TU_UPLOAD_PRESET',    // Ejemplo: 'tropa_preset'
};

export async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Error al subir imagen a Cloudinary');
  }

  const data = await response.json();
  return data.secure_url;
}

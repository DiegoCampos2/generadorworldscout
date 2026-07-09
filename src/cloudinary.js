// Configuración de Cloudinary (GRATIS - 25GB almacenamiento)
// 1. Crea cuenta en: https://cloudinary.com/users/register_free
// 2. Ve a Settings → Upload → Upload presets → "Add upload preset"
// 3. Marca "Unsigned" y copia el preset name
// 4. Reemplaza estos valores:
export const CLOUDINARY_CLOUD_NAME = 'gvthmjgu';
export const CLOUDINARY_UPLOAD_PRESET = 'tropacaminantes';

export async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData
  });

  if (!res.ok) throw new Error('Error al subir imagen');
  const data = await res.json();
  return data.secure_url;
}

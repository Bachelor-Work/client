export const convertToImage = (string) => {
  if (typeof string !== 'undefined' && typeof string === 'string') {
    const byteString = atob(string);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer]);
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }
  return null;
};

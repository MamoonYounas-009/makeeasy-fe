import axios from "axios";
import { api } from "@/services/api";
import { toast } from "sonner";

export const s3Uploader = async (file, setLoading) => {
  try {
    const response = await api.post("/upload-helper", {
      fileName: file.name,
      fileType: file.type,
    });

    const { url, fileKey } = response.data;

    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    setLoading(false);

    // Derive base URL from presigned PUT URL
    const fileUrl = url.split("?")[0]; // Remove query params, get clean URL
    return fileUrl;

  } catch (error) {
    setLoading(false);
    toast.error("Failed to upload image");
    return error;
  }
};

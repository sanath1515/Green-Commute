import React, { useRef, useState } from "react";
import {
  Typography,
  CircularProgress,
  Alert,
  Box,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";
import { Button } from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { jobDataProp } from "../../../Constants";

export type UploadFileProps = {
  setJobs: (jobs: jobDataProp[]) => void;
};

// Styled container
const ButtonsWrapper = styled(Box)(({ theme }) => ({
  marginTop: 15,
  marginBottom: 15,
  marginLeft: theme.spacing(3),
}));

const FileUploadMUI: React.FC<UploadFileProps> = ({ setJobs }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setMessage(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/jobs/upload_resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
      dispatch({ type: "SET_RESUME_NAME", payload: file.name });
      setJobs(response.data.matched_rows);
    } catch (error: any) {
      setMessage(error.response?.data?.error || "An error occurred during file upload.");
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <ButtonsWrapper>
      <Button
        variant="outlined"
        color="primary"
        name="Select File"
        startIcon={<UploadFileIcon />}
        onClick={triggerFileInput}
        sx={{
          borderRadius: 2,
          marginRight: 2,
          width: 140,
          height: 48,
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {file && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          {file.name}
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={loading}
        sx={{
          color: "#FFF",
          borderRadius: 2,
          width: 140,
          height: 48,
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Upload"}
      </Button>

      {message && (
        <Alert
          severity={message.includes("success") ? "success" : "error"}
          sx={{ mt: 2 }}
        >
          {message}
        </Alert>
      )}
    </ButtonsWrapper>
  );
};

export default FileUploadMUI;

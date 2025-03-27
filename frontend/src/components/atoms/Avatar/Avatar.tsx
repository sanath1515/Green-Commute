import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles"; 

type AvatarProps = {
  alt?: string;
  src?: string;
  variant?: "circular" | "rounded" | "square";
  className?: string;
  valid?: boolean;
};

// Styled Avatar using Emotion
const StyledAvatar = styled(Avatar)<{ valid?: boolean }>(({ valid }) => ({
  backgroundColor: valid ? "grey" : "transparent",
}));

export const Avatars = ({ alt, src, variant, className, valid }: AvatarProps) => {
  return (
    <StyledAvatar
      alt={alt}
      src={src}
      variant={variant}
      className={className}
      valid={valid}
    />
  );
};

import { FaFacebookF, FaInstagram, FaLinkedinIn,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import IconButton from "../../ui/IconButton/IconButton";

function SocialLinks() {
  return (
    <div className="flex gap-3">
      <IconButton icon={<FaFacebookF size={16} />} aria-label="Facebook"/>

      <IconButton icon={<FaInstagram size={16} />} aria-label="Instagram"/>

      <IconButton icon={<FaXTwitter size={16} />}  aria-label="X"/>

      <IconButton icon={<FaLinkedinIn size={16} />} aria-label="LinkedIn"/>
    </div>
  );
}

export default SocialLinks;
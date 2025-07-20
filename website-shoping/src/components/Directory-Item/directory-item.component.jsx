import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
    const navigate = useNavigate();
    const { imageUrl, title,route } = category;
    const onNavigateHanlder =() => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHanlder}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop  Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
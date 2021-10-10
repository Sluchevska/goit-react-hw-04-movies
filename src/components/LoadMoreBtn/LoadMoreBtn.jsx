import PropTypes from 'prop-types';
import { Button } from '../LoadMoreBtn/LoadMoreBtn.styled';
 function LoadMoreBtnClick({ onClick }) {
  return (
    <div>
      <Button type="button" onClick={onClick}>
        Load more
      </Button>
    </div>
  );
}

export default LoadMoreBtnClick;

LoadMoreBtnClick.propTypes = {
  onClick: PropTypes.func.isRequired,
};

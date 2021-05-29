import { Button } from "@material-ui/core";

const SimpleButton = ({ Title }) => {
  return (
    <div>
      <Button variant="contained" color="primary">
        {Title}
      </Button>
    </div>
  );
};

export default SimpleButton;

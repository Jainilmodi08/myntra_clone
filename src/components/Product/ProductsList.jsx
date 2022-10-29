import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ProductTile } from "../../components";
import { useProduct } from "../../context";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "10px",
  },
  sliderContainer: {
    marginBottom: "15px",
  },
  imageSlider: {
    maxHeight: "450px",
    height: "450px",
    cursor: "pointer",
  },
}));

export function ProductsList(props) {
  const { productsState } = useProduct();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {productsState.products ? (
        <Grid container>
          {productsState.products.map((product, id) => (
            <Grid item key={id} style={{ margin: "0 auto" }}>
              <ProductTile
                details={product}
              
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid style={{ padding: "100px" }}>Products No products</Grid>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { getAllProducts, getFiltersList } from "../../apis/productService";
import { Slider } from "../Common";
import { ProductsList, Header, ShopNow } from "../../components";
import { useProduct } from "../../context";
import { Filters } from "../Filters/Filters";
import { Loader } from "../Common";

const useStyles = makeStyles(theme => ({
  sliderContainer: {
    marginBottom: "15px",
  },
  imageSlider: {
    maxHeight: "450px",
    height: "450px",
    cursor: "pointer",
  },
}));


export function Dashboard(params) {
  const classes = useStyles();
  const history = useHistory();
  const path = useLocation();

  const [showSlider, setShowSlider] = useState(true);

  const [loading, setLoading] = useState(false);
  const banners = [
    {
    
      onClick: e => {
        history.push("/shop/men");
      },
    }
  ];

  const [products] = useState([]);
  const { productsDispatch } = useProduct();

  function loadList() {
    let requestParams = {};

    if (path.pathname === "/") {
      requestParams.section = "men";
      setShowSlider(false);
    }else {
      setShowSlider(true);
    }

    setLoading(true);
    getAllProducts({
      section: requestParams.section,
    })
      .then(function (res) {
        productsDispatch({ type: "SET_PRODUCTS", payload: res.data.data });
        getFiltersList({ section: requestParams.section })
          .then(function (response) {
            productsDispatch({
              type: "SET_FILTERS_LIST",
              payload: {
                colors: response.data.data.colors,
                categories: response.data.data.categories,
                brands: response.data.data.brands,
              },
            });
            productsDispatch({
              type: "SET_SELECTED_FILTERS",
              payload: null,
            });
          })
          .catch(error => {});

        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }
  useEffect(
    () => {
      loadList();
    },
    // eslint-disable-next-line
    [path.pathname]
  );


  return (
    <div>
      <Header />

      {showSlider ? (
        <>
          <div className={classes.sliderContainer}>
            <Slider className={classes.imageSlider} sliderItems={banners} sliderType="fade" sliderAutoPlay={true} sliderStopOnHover={false}
              slideNavigatorsHide={true}
              sliderIndicators
              sliderIndicatorsStyle={{
                padding: "10px",
              }}
            />
          </div>
          <ShopNow />
        </>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <Grid container style={{ paddingTop: "20px" }}>
                <Grid item md={3} lg={3} xl={3} display={{ xs: "none", sm: "none" }}>
                  <Filters />
                </Grid>

                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                  <ProductsList products={products} />
                </Grid>
              </Grid>
              <Grid></Grid>
            </div>
          )}
        </>
      )}

      
    </div>
  );
}

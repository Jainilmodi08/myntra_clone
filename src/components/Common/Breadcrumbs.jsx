import { makeStyles } from "@material-ui/core/styles";
import BreadcrumbMaterial from "@material-ui/core/Breadcrumbs";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "20px 0px",
  },
  list: {
    listStyle: "none",
    display: "inline-block",
    "&:after": {
      content: "›",
      display: "inline",
      fontSize: "1.2em",
      color: "#AAA",
      padding: "0 .0725em 0 .15em",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const UserBreadcrumb = ({ match }) => {
  return null; 
};
const routes = [
  { path: "/shop/:productId", breadcrumb: UserBreadcrumb },
  { path: "/shop/kids", breadcrumb: "Kids" },
  { path: "/shop/women", breadcrumb: "Women" },
];
const Breadcrumbs = props => {
  const classes = useStyles();

  return (
   
    <BreadcrumbMaterial aria-label="breadcrumb">
      {props?.breadcrumbs?.map(({ match, breadcrumb }) => (
        <li
          key={match.url}
        
        >
          <NavLink to={match.url} className={classes.link}>
            {breadcrumb}
          </NavLink>
        </li>
      ))}
    </BreadcrumbMaterial>
  );
};

export default withBreadcrumbs(routes)(Breadcrumbs);

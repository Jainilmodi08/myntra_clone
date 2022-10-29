import Carousel from "react-material-ui-carousel";

export function Slider(props) {
  const {
    sliderItems,
    sliderType,
    sliderAutoPlay,
    sliderStopOnHover,
    sliderNavStyle,
    sliderNavigatorsShow, 
    slideNavigatorsHide,
    sliderIndicators, 
    sliderIndicatorsStyle,
    sliderActiveIndicator,
  } = props;

  return (
    <Carousel
      animation={sliderType ? sliderType : "slide"} 
      autoPlay={sliderAutoPlay} 
      stopAutoPlayOnHover={sliderStopOnHover}
      interval="3000" 
      reverseEdgeAnimationDirection={false}
      navButtonsAlwaysVisible={
        sliderNavigatorsShow ? sliderNavigatorsShow : false
      }
      navButtonsAlwaysInvisible={
        slideNavigatorsHide ? slideNavigatorsHide : false
      }
      navButtonsProps={{
        style: sliderNavStyle && sliderNavStyle,
      }}
      indicators={sliderIndicators ? sliderIndicators : false}
      indicatorIconButtonProps={{
        style: sliderIndicatorsStyle
          ? sliderIndicatorsStyle
          : {
              marginTop: "0px",
            },
      }}
      activeIndicatorIconButtonProps={{
        style: sliderActiveIndicator && sliderActiveIndicator,
      }}
    >
      {sliderItems.map((item, i) => (
        <Item key={i} item={item} type="IMAGE" className={props.className} />
      ))}
    </Carousel>
  );
}
function Item(props) {
  const { item, className } = props;
  switch (props.type) {
    case "IMAGE":
      return (
        <div className={className}>
          <img
            src={item.src}
            alt={item?.name}
            style={{
              height: "100%",
              maxHeight: "100%",
              minHeight: "100%",
              width: "100%",
              maxWidth: "100%",
              minWidth: "100%",
            }}
            onClick={
              item.onClick 
            }
          />
        </div>
      );
    case "IMAGE_WITH_CONTENT":
      return (
        <div>
          <img src="" alt=""></img>
          <span></span>
        </div>
      );
    case "CONTENT":
      return <span></span>;
    default:
      return <span></span>;
  }
}

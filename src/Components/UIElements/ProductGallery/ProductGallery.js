import React from "react";
import { makeStyles } from "@material-ui/styles";
import { GridList, GridListTile } from "@material-ui/core";

import ProductImage from "../ProductImage/ProductImage";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto 2em",
    textAlign: "center",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));

const ProductGallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" className={classes.gridList} cols={12}>
        <GridListTile
          key={() => {
            Math.random();
          }}
          cols={4}
        >
          <ProductImage
            imgUrlMedia400={
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-03fcc7d9-547f-4ab3-a2db-8909c515220c/us-classic99-trucker-hat-7q1JNm.jpg"
            }
            media400={"(max-width: 600px)"}
            imgUrlMedia800={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5bf9d600-5633-45f8-afab-fbea904f05e7/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media800={"(max-width: 800px)"}
            imgUrlMedia1200={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7463394-6a5f-4270-a20e-65805754f542/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media1200={"(max-width: 1200px)"}
            imageUrl={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/16d3c9f2-3b31-44d1-aafd-6ec74af2b7c3/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            alt={"Nike Shoes!"}
          />
        </GridListTile>
        <GridListTile
          key={() => {
            Math.random();
          }}
          cols={4}
        >
          <ProductImage
            imgUrlMedia400={
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-03fcc7d9-547f-4ab3-a2db-8909c515220c/us-classic99-trucker-hat-7q1JNm.jpg"
            }
            media400={"(max-width: 600px)"}
            imgUrlMedia800={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5bf9d600-5633-45f8-afab-fbea904f05e7/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media800={"(max-width: 800px)"}
            imgUrlMedia1200={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7463394-6a5f-4270-a20e-65805754f542/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media1200={"(max-width: 1200px)"}
            imageUrl={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/16d3c9f2-3b31-44d1-aafd-6ec74af2b7c3/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            alt={"Nike Shoes!"}
          />
        </GridListTile>
        <GridListTile
          key={() => {
            Math.random();
          }}
          cols={4}
        >
          <ProductImage
            imgUrlMedia400={
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-03fcc7d9-547f-4ab3-a2db-8909c515220c/us-classic99-trucker-hat-7q1JNm.jpg"
            }
            media400={"(max-width: 600px)"}
            imgUrlMedia800={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5bf9d600-5633-45f8-afab-fbea904f05e7/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media800={"(max-width: 800px)"}
            imgUrlMedia1200={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7463394-6a5f-4270-a20e-65805754f542/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media1200={"(max-width: 1200px)"}
            imageUrl={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/16d3c9f2-3b31-44d1-aafd-6ec74af2b7c3/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            alt={"Nike Shoes!"}
          />
        </GridListTile>
        <GridListTile
          key={() => {
            Math.random();
          }}
          cols={4}
        >
          <ProductImage
            imgUrlMedia400={
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-03fcc7d9-547f-4ab3-a2db-8909c515220c/us-classic99-trucker-hat-7q1JNm.jpg"
            }
            media400={"(max-width: 600px)"}
            imgUrlMedia800={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5bf9d600-5633-45f8-afab-fbea904f05e7/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media800={"(max-width: 800px)"}
            imgUrlMedia1200={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7463394-6a5f-4270-a20e-65805754f542/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media1200={"(max-width: 1200px)"}
            imageUrl={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/16d3c9f2-3b31-44d1-aafd-6ec74af2b7c3/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            alt={"Nike Shoes!"}
          />
        </GridListTile>
        <GridListTile
          key={() => {
            Math.random();
          }}
          cols={4}
        >
          <ProductImage
            imgUrlMedia400={
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-03fcc7d9-547f-4ab3-a2db-8909c515220c/us-classic99-trucker-hat-7q1JNm.jpg"
            }
            media400={"(max-width: 600px)"}
            imgUrlMedia800={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5bf9d600-5633-45f8-afab-fbea904f05e7/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media800={"(max-width: 800px)"}
            imgUrlMedia1200={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7463394-6a5f-4270-a20e-65805754f542/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            media1200={"(max-width: 1200px)"}
            imageUrl={
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/16d3c9f2-3b31-44d1-aafd-6ec74af2b7c3/space-hippie-04-womens-shoe-x1HFp5.jpg"
            }
            alt={"Nike Shoes!"}
          />
        </GridListTile>
      </GridList>
    </div>
  );
};

export default ProductGallery;

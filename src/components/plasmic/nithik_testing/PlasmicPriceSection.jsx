// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qP4Hc5JLco42gBkKs1DSFq
// Component: W9BLG8NXPpc9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PriceCard from "../../PriceCard"; // plasmic-import: 6YerjHib4ZZ3/component
import { useScreenVariants as useScreenVariantsbGwLjClmrBr6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bGwLJClmrBR6/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_nithik_testing.module.css"; // plasmic-import: qP4Hc5JLco42gBkKs1DSFq/projectcss
import sty from "./PlasmicPriceSection.module.css"; // plasmic-import: W9BLG8NXPpc9/css

export const PlasmicPriceSection__VariantProps = new Array();

export const PlasmicPriceSection__ArgProps = new Array();

function PlasmicPriceSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbGwLjClmrBr6()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__o21K)}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__zca6O)}>
              <PriceCard
                borders={["flatLeft"]}
                className={classNames("__wab_instance", sty.priceCard__jW5UQ)}
              />
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__dJnsi)}>
              <div className={classNames(projectcss.all, sty.freeBox__t9GN)}>
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"We Recommended"}
                </div>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <PriceCard
                  borders={["flatCenter"]}
                  className={classNames("__wab_instance", sty.priceCard__jvu0L)}
                />
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__lyEvp)}>
              <PriceCard
                borders={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ["flatRight"]
                    : ["flatRight"]
                }
                className={classNames("__wab_instance", sty.priceCard___0B5Hg)}
              />
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPriceSection__ArgProps,
          internalVariantPropNames: PlasmicPriceSection__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicPriceSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceSection";
  } else {
    func.displayName = `PlasmicPriceSection.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceSection = Object.assign(
  // Top-level PlasmicPriceSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicPriceSection
    internalVariantProps: PlasmicPriceSection__VariantProps,
    internalArgProps: PlasmicPriceSection__ArgProps
  }
);

export default PlasmicPriceSection;
/* prettier-ignore-end */
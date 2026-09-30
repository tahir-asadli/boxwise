import { useSelect } from '@wordpress/data';
export function useDeviceType() {
  return useSelect((select) => {
    // WP 6.5+: post editor AND site editor
    const editor = select('core/editor');
    if (editor?.getDeviceType) {
      return editor.getDeviceType();
    }

    // Older site editor
    const editSite = select('core/edit-site');
    if (editSite?.__experimentalGetPreviewDeviceType) {
      return editSite.__experimentalGetPreviewDeviceType();
    }

    // Older post editor
    const editPost = select('core/edit-post');
    if (editPost?.__experimentalGetPreviewDeviceType) {
      return editPost.__experimentalGetPreviewDeviceType();
    }

    return 'Desktop';
  }, []);
}

import {
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyCenter,
  AlignVerticalDistributeCenter,
  AlignVerticalSpaceBetween,
  AlignStartVertical,
  AlignEndVertical,
  AlignHorizontalJustifyCenter,
  AlignHorizontalSpaceBetween,
  AlignHorizontalSpaceAround,
  Ban,
} from "lucide-react";


export const ICONS = {
  VJustifyEnd: AlignVerticalJustifyEnd,
  VJustifyStart: AlignVerticalJustifyStart,
  VJustifyCenter: AlignVerticalJustifyCenter,
  VDistributeCenter: AlignVerticalDistributeCenter,
  VSpaceBetween: AlignVerticalSpaceBetween,
  HStart: AlignStartVertical,
  HEnd: AlignEndVertical,
  HJustifyCenter: AlignHorizontalJustifyCenter,
  HSpaceBetween: AlignHorizontalSpaceBetween,
  HSpaceAround: AlignHorizontalSpaceAround,
  Ban: Ban,
}

export const classNames = (attributes) => {

  const {
    justifyContent,
    tabletJustifyContent,
    mobileJustifyContent,
    widthType,
    tabletWidthType,
    mobileWidthType,
    width,
    tabletWidth,
    mobileWidth,
    widthUnit,
    tabletWidthUnit,
    mobileWidthUnit,
    columnGap,
    tabletColumnGap,
    mobileColumnGap,
    columnGapUnit,
    tabletColumnGapUnit,
    mobileColumnGapUnit,
    rowGap,
    tabletRowGap,
    mobileRowGap,
    rowGapUnit,
    tabletRowGapUnit,
    mobileRowGapUnit,
    wrap,
    tabletWrap,
    mobileWrap,
    direction,
    tabletDirection,
    mobileDirection,
    reverse,
    tabletReverse,
    mobileReverse,
    alignItems,
    tabletAlignItems,
    mobileAlignItems,
    grow,
    tabletGrow,
    mobileGrow,
    shrink,
    tabletShrink,
    mobileShrink,
    display,
    tabletDisplay,
    mobileDisplay,
  } = attributes;

  const classNames = [];

  classNames.push("taufb");

  if (justifyContent) {
    classNames.push(`taufb--justify-${justifyContent}`);
  }
  if (tabletJustifyContent) {
    classNames.push(
      `taufb--justify-tablet-${tabletJustifyContent}`,
    );
  }
  if (mobileJustifyContent) {
    classNames.push(
      `taufb--justify-mobile-${mobileJustifyContent}`,
    );
  }

  return classNames
}
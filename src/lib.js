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
  StretchVertical,
  AlignStartVertical,
  AlignEndVertical,
  AlignHorizontalJustifyCenter,
  AlignHorizontalSpaceBetween,
  AlignHorizontalSpaceAround,
  StretchHorizontal,
  ArrowRight,
  ArrowDown,
  Ban,
} from "lucide-react";


export const ICONS = {
  VJustifyEnd: AlignVerticalJustifyEnd,
  VJustifyStart: AlignVerticalJustifyStart,
  VJustifyCenter: AlignVerticalJustifyCenter,
  VDistributeCenter: AlignVerticalDistributeCenter,
  VSpaceBetween: AlignVerticalSpaceBetween,
  VStrech: StretchVertical,
  HStart: AlignStartVertical,
  HEnd: AlignEndVertical,
  HJustifyCenter: AlignHorizontalJustifyCenter,
  HSpaceBetween: AlignHorizontalSpaceBetween,
  HSpaceAround: AlignHorizontalSpaceAround,
  HStrech: StretchHorizontal,
  Ban: Ban,
  ArrowRight: ArrowRight,
  ArrowDown: ArrowDown,
}

export const classNames = (attributes) => {

  const {
    justifyContent,
    tabletJustifyContent,
    mobileJustifyContent,
    alignItems,
    tabletAlignItems,
    mobileAlignItems,
    direction,
    tabletDirection,
    mobileDirection,
    wrap,
    tabletWrap,
    mobileWrap,
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
    reverse,
    tabletReverse,
    mobileReverse,
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

  if (alignItems) {
    classNames.push(`taufb--align-${alignItems}`);
  }
  if (tabletAlignItems) {
    classNames.push(
      `taufb--justify-tablet-${tabletAlignItems}`,
    );
  }
  if (mobileAlignItems) {
    classNames.push(
      `taufb--align-mobile-${mobileAlignItems}`,
    );
  }

  if (direction) {
    classNames.push(`taufb--direction-${direction}`);
  }
  if (tabletDirection) {
    classNames.push(
      `taufb--direction-tablet-${tabletDirection}`,
    );
  }
  if (mobileDirection) {
    classNames.push(
      `taufb--direction-mobile-${mobileDirection}`,
    );
  }

  if (wrap) {
    classNames.push(`taufb--wrap-${wrap}`);
  }
  if (tabletWrap) {
    classNames.push(
      `taufb--wrap-tablet-${tabletWrap}`,
    );
  }
  if (mobileWrap) {
    classNames.push(
      `taufb--wrap-mobile-${mobileWrap}`,
    );
  }

  return classNames
}
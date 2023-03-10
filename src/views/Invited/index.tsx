import { useCallback, useEffect, useState } from 'react'
import { Flex, Text, Box, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useWeb3LibraryContext, useWeb3React } from '@pancakeswap/wagmi'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useTranslation } from '@pancakeswap/localization'
import { BodyWrap, InviterdWrap, InviterdTitle, InviterdText, InviterdList, InviterdItem } from './style'

export default function Invited() {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const { account } = useWeb3React()
  const library = useWeb3LibraryContext()
  return (
    <BodyWrap isMobile={isMobile}>
      <InviterdWrap>
        <InviterdTitle isMobile={isMobile}>
          <Box mr="10px">{t('My superior')}: </Box>
          <Box>{account}</Box>
        </InviterdTitle>
        <InviterdTitle isMobile={isMobile}>
          <Box mr="10px">{t('My number of invites')}: </Box>
          <Box>0</Box>
        </InviterdTitle>
        <InviterdText isMobile={isMobile}>{t('Invitation address list')}</InviterdText>
        <InviterdList isMobile={isMobile}>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
          <InviterdItem isMobile={isMobile}>{account}</InviterdItem>
        </InviterdList>
      </InviterdWrap>
    </BodyWrap>
  )
}

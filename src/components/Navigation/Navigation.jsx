import { StyledLink, SyledNav } from './Navigation.styled';

const navigationSchema = [
  { value: 'Today', link: 'today' },
  { value: 'Tomorrow', link: 'tomorrow' },
  { value: 'Next 7 days', link: 'week' },
];

const Navigation = () => {
  return (
    <SyledNav>
      {navigationSchema.map(item => (
        <StyledLink key={item?.link} to={item?.link}>
          {item?.value}
        </StyledLink>
      ))}
    </SyledNav>
  );
};

export default Navigation;

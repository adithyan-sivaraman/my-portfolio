/* eslint-disable no-unused-vars */
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { externalLink } from "./ExternalLink";

const MenuBar = () => {
  return (
    <Menu>
      <MenuButton
        width="50px"
        backgroundColor="blue.400"
        as={Button}
        position="absolute"
        right="25px"
        top="10px"
        zIndex="50"
      >
        <FontAwesomeIcon icon={faCaretDown} size="2xl" />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://img.icons8.com/dotty/80/resume.png"
            alt="resume"
          />
          <Link
            href="https://drive.google.com/uc?id=1mUq-041CEInhR4ua1xKaecmYEGf38ghG&export=download"
            className="text-sm lg:text-base font-bold"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </Link>
        </MenuItem>
        <MenuDivider />
        <MenuGroup title="Reach Me" textTransform="uppercase" fontSize="16px">
          {externalLink.map((item) => (
            <MenuItem gap="10px" key={item.text}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                alt={item.alt}
                src={item.imgSrc}
              />
              <Link href={item.mediaSrc} rel="noreferrer" target="_blank">
                {item.text}
              </Link>
            </MenuItem>
          ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
export default MenuBar;

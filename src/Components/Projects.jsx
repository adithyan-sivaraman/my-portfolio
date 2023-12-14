import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
const Projects = () => {
  return (
    <section
      className="flex flex-col gap-5 w-screen h-screen relative"
      id="about"
    >
      <div className="h-1/6 bg-gray-500 text-yellow-400 w-screen text-center text-4xl font-extrabold flex justify-center items-center">
        MY PROJECTS
      </div>

      <div className="card-grid">
        <Card maxWidth="350px" height="210px">
          <CardHeader>
            <Heading size="sm">Assetbot Marketplace</Heading>
          </CardHeader>

          <CardBody padding="10px">
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text fontSize="sm" paddingTop="5px">
                  Web app by Assetbot Solutions LLP for companies and investors
                  in the real estate sector.
                </Text>
              </Box>

              <Box>
                <Heading
                  size="sm"
                  textTransform="uppercase"
                  paddingBottom="5px"
                >
                  Project Link
                </Heading>

                <Link href="https://assetbot.org" isExternal marginTop="10px">
                  Live App <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card maxWidth="350px" height="210px">
          <CardHeader>
            <Heading size="sm">Task App</Heading>
          </CardHeader>

          <CardBody padding="10px">
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text fontSize="sm" paddingTop="5px">
                  Single user task app created using Vite JS Library. Helps to
                  create and manage tasks.
                </Text>
              </Box>
              <Box>
                <Heading
                  size="sm"
                  textTransform="uppercase"
                  paddingBottom="5px"
                >
                  Project Link
                </Heading>
                <Link
                  href="https://chipper-torrone-1662e7.netlify.app/"
                  isExternal
                >
                  Deployed App <ExternalLinkIcon mx="2px" />
                </Link>
                <Link
                  href="https://github.com/adithyan-sivaraman/FSD-Day38-frontend"
                  isExternal
                  marginTop="10px"
                >
                  Github <ExternalLinkIcon mx="2px" />
                </Link>
                <Link
                  href="https://github.com/adithyan-sivaraman/FSD-Day38-backend"
                  isExternal
                  marginTop="10px"
                >
                  Github <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card maxWidth="350px" height="210px">
          <CardHeader>
            <Heading size="sm">Order Management</Heading>
          </CardHeader>

          <CardBody padding="10px">
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text fontSize="sm" paddingTop="5px">
                  Order Management app to manage service orders for management
                  consultancy services
                </Text>
              </Box>
              <Box>
                <Heading
                  size="sm"
                  textTransform="uppercase"
                  paddingBottom="5px"
                >
                  Project Link
                </Heading>
                <Link
                  href="https://darling-centaur-17d8dc.netlify.app/"
                  isExternal
                >
                  Deployed App <ExternalLinkIcon mx="2px" />
                </Link>
                <Link
                  href="https://github.com/adithyan-sivaraman/finorders-frontnend"
                  isExternal
                  paddingLeft="10px"
                >
                  Github <ExternalLinkIcon mx="2px" />
                </Link>
                <Link
                  href="https://github.com/adithyan-sivaraman/finorders-backend"
                  isExternal
                  paddingLeft="10px"
                >
                  Github <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card maxWidth="350px" height="210px">
          <CardHeader>
            <Heading size="sm">Income Tax Calculator</Heading>
          </CardHeader>

          <CardBody padding="10px">
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text fontSize="sm" paddingTop="5px">
                  Simple Income Tax Calculator for individuals as per Indian
                  Income Tax Act, 1961
                </Text>
              </Box>
              <Box>
                <Heading
                  size="sm"
                  textTransform="uppercase"
                  paddingBottom="5px"
                >
                  Project Link
                </Heading>
                <Link
                  href="https://inspiring-zabaione-c97b20.netlify.app/"
                  isExternal
                >
                  Deployed App <ExternalLinkIcon mx="2px" />
                </Link>
                <Link
                  href="https://github.com/adithyan-sivaraman/incometax-calculator"
                  isExternal
                  paddingLeft="10px"
                >
                  Github <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
export default Projects;

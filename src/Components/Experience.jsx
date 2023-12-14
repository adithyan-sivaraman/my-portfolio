import {
    Stack,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Experience = () => {
    return (
        <section
            className="flex flex-col gap-5 w-screen h-screen relative"
            id="experience"
        >
            <div className="h-1/6 bg-blue-500 text-gray-700 w-screen text-center text-4xl font-extrabold flex justify-center items-center">
                MY Experience
            </div>
            <Stack spacing={2} padding="10px">
                <p className="text-lg font-bold tracking-wider">Manohar Chowdhry & Associates</p>
                <UnorderedList listStyleType="none">
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Statutory Audit,Internal Audit
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Tax Audit, Income Tax Returns, TDS returns
                    </ListItem>
                </UnorderedList>

                <p className="text-lg font-bold tracking-wider">Agrya Consulting Private Limited</p>
                <UnorderedList listStyleType="none">
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Statutory and Internal Audits
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Process Audits and Internal Controls
                    </ListItem>
                </UnorderedList>

                <p className="text-lg font-bold tracking-wider">Shriram Value Services Private Limited </p>
                <UnorderedList listStyleType="none">
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Requirement Analaysis , Preparation of SRS Document
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Software Testing
                    </ListItem>
                </UnorderedList>

                <p className="text-lg font-bold tracking-wider">Gnanaguru Consultancy </p>
                <UnorderedList listStyleType="none">
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Tax Audit, Income Tax Returns and TDS Returns
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        GST Audit and GST Returns
                    </ListItem>
                </UnorderedList>

                <p className="text-lg font-bold tracking-wider">GAPRSK Associates & Chartered Accountants</p>
                <UnorderedList listStyleType="none">
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Payroll and Payments processing
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Accounting and Preparation of Financial Statements
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        GST And TDS
                    </ListItem>
                </UnorderedList>

                <p className="text-lg font-bold tracking-wider">Senthilraja & Mehala Chartered Accountants</p>
                <UnorderedList listStyleType="none">
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Statutory Audits
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Transfer Pricing Audits
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        GST Returns and GST Audits
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Form 15CA/15CB for remittances
                    </ListItem>
                </UnorderedList>


                <p className="text-lg font-bold tracking-wider">GAPRSK Associates & Chartered Accountants</p>
                <UnorderedList listStyleType="none">
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        GAPRSK Associates & Chartered Accountants
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        Accounting and Preparation of Financial Statements
                    </ListItem>
                    <ListItem fontSize="16px" letterSpacing="0.05em">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 pr-2" />
                        GST And TDS
                    </ListItem>
                </UnorderedList>
            </Stack>
        </section>
    );
};
export default Experience;

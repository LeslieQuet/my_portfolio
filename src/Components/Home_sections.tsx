import { CssBaseline, Container, Typography, Box, IconProps } from '@mui/material';
import { text_content } from '../types';

interface IProps {
    id: string
    title: string
    subtitle?: string
    content: text_content
}

const Home_section = ({id, title, subtitle, content} : IProps) => {
    return (
        <section id={id} style={{ padding: '50px 0' }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3">{title}</Typography>
          </Box>
          <Box>
            {subtitle && <Typography variant="h4" component="h2">
              {subtitle}
            </Typography>}
            {content.map((text, index) => (
                <Typography key={index} variant="body1" component="p" paragraph>
                    {text}
                </Typography>
            ))}
          </Box>
        </section>
    )
}

export default Home_section
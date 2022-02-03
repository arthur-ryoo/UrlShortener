import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  LinearProgress,
} from '@material-ui/core';
import urlShortener from '../../api/urlShortener';
import DisplayLink from '../DisplayLink/DisplayLink';

function UrlShortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Submit the long URL
  const handleSubmit = (event) => {
    event.preventDefault();
    getShortUrl();
    setUrl('');
    setIsLoading(!isLoading);
  };

  // Make a POST request to get a randomly generated short URL
  // Alert if the URL is not valid
  const getShortUrl = async () => {
    await urlShortener
      .post('short', {
        longUrl: url,
      })
      .then((response) => {
        setShortUrl(response.data.shortUrl);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert('The URL is not valid');
          setIsLoading(false);
          setShortUrl('');
        }
      });
  };

  // Disable the form button if the input is empty
  const isFormValid = () => {
    return url;
  };

  return (
    <Container component="main" maxWidth="sm" margintop="true">
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12}>
            <h1>URL Shortener</h1>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="url"
              label="Shorten your link"
              name="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </Grid>
          {!isLoading && (
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isFormValid()}
              >
                Shorten
              </Button>
            </Grid>
          )}
          {isLoading && <LinearProgress />}
          <Grid item xs={12}>
            {shortUrl && (
              <>
                <h3>Short URL</h3>
                <DisplayLink shortUrl={shortUrl} />
              </>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default UrlShortener;

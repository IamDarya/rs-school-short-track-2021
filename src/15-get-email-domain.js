/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = email;
  for (let i = domain.length; i >= 0; i--) {
    if (email[i] === '@') {
      domain = domain.slice(i + 1);
      break;
    }
  }
  return domain;
}

module.exports = getEmailDomain;

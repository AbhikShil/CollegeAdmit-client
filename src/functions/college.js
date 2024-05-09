import axios from "axios";

export const createCollege = async (college, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/college`, college, {
    headers: {
      authtoken,
    },
  });
export const getCollegesByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/colleges/${count}`);

export const removeCollege = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/college/${slug}`,{
    headers:{
      authtoken,
    },
  });

export const getCollege = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/college/${slug}`);

export const updateCollege = async (slug, college, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/college/${slug}`, college, {
    headers: {
      authtoken,
    },
  });

export const getColleges = async (sort, order, page) =>
  await axios.post(`${process.env.REACT_APP_API}/colleges`, {
    sort,
    order,
    page,
  });

export const getCollegesCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/colleges/total`);

export const getRelated = async (collegeId) =>
  await axios.get(`${process.env.REACT_APP_API}/college/related/${collegeId}`);

export const fetchCollegesByFilter = async (arg) =>
  await axios.post(`${process.env.REACT_APP_API}/search/filters`, arg);

export const getAllColleges = async () =>
  await axios.get(`${process.env.REACT_APP_API}/allcolleges`);
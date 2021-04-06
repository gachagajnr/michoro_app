import apiClient from 'app/services/client';

export default function fetchArt() {
  return apiClient.service('arts').find({
    query: {
      visibleToPublic: true,
      //   $sort: {
      //     price: category.price,
      //   },
      // isSold: false,
      // $text: { $search: category.search },
    },
  });
}

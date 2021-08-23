**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Một trang trại có $n$ chú bò, chú bò thứ $i$ có chiều cao $h_i$ nằm ở chuồng bò $i$ được đánh số từ trái qua phải. Các cửa chuồng bò đều đã đóng chặt nhưng giữa các chuồng bò chỉ được ngăn cách bởi một thanh gỗ nên chúng rất dễ chui qua chui lại. Các chú bò thường rất tăng động, chúng thường chui sang các chuồng bò lân cận chơi. Tuy nhiên, mỗi con bò đều chỉ dám vào chuồng của chú bò thấp hơn, hoặc có chiều cao lớn hơn mình không quá $k$ đơn vị.

**Yêu cầu:** Cho chiều cao các chú bò. Hãy xác định số chuồng bò mà từng chú bò có thể ghé thăm.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $n,k\ (1≤n≤10^5,0≤k≤10^9)$;
- Dòng thứ hai chứa $n$ số nguyên $h_1,h_2,…,h_n$ xác định chiều cao của con bò thứ $i$.

## Dữ liệu ra:
- Ghi ra $n$ số nguyên, số thứ $i$ là số lượng chuồng bò mà chú bò $i$ có thể ghé thăm.

## Ví dụ:
### Dữ liệu vào:
```
7 3 
3 7 4 2 5 6 10
```

### Dữ liệu ra:
```
1 7 6 3 6 6 7
```

## Giới hạn:
- $50\%$ số test tương ứng $50\%$ số điểm có $n≤1000$.
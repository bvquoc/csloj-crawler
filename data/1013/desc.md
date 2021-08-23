**<center>NGUỒN: CONTEST PRACTICE VNOI20  (WEEK 2 - T11/2019)</center>**
<br>

Ban tổ chức kỳ thi lập trình Quốc gia năm $2020$ có $M$ chiếc kẹo và muốn phát cho $N$ bạn đạt được kết quả tốt trong kì thi. Gọi $a_i$ là độ ưa thích kẹo của bạn thứ $i$, khi đó một cách phát kẹo được cho là làm hài lòng tất cả các bạn học sinh nếu như không phát cho bạn nào quá $a_i$ chiếc kẹo.

**Yêu cầu**: Đếm số cách phát hết $M$ cái kẹo để tất cả các bạn học sinh đều hài lòng và vui vẻ nhận quà.

## Dữ liệu vào:
- Dòng đầu gồm hai số nguyên dương  $N$ và $M\ (N≤15, M≤10^{15}) $
- Dòng thứ hai gồm $N$ số nguyên không âm $a_1,a_2,…,a_N\  (a_i≤10^{15})$

## Dữ liệu ra:
- Do kết quả có thể rất lớn nên bạn chỉ cần in ra kết quả bài toán khi chia lấy dư cho $10^5+3$

## Ví dụ:
### Dữ liệu vào:
```
2 3
1 3
```

### Dữ liệu ra:
```
2
```

## Giới hạn:
- $20\%$ số test có $N=2\text{ và }M≤10^{15}$
- $20\%$ số test khác có $M≤10^3$
- $30\%$ số test khác có $M≤10^6$
- $30\%$ số test còn lại không giới hạn gì thêm
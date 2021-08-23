Trước mặt Mario là một dãy $10$ cây nấm xếp thành một hàng dài, mỗi cây nấm có một giá trị là một số nguyên không vượt quá $100$. Mario không cần phải hái hết nấm mà chỉ cần đạt tổng giá trị càng gần $100$ càng tốt và chỉ được hái liên tục các cây nấm cạnh nhau. Nếu có hai khả năng gần $100$ tương đương nhau (ví dụ $98$ và $102$) Mario sẽ chọn phương án có giá trị lớn hơn.
<center><img src="/images/problems/266/MUSHROOM.png" width="500px" /></center>

**Yêu cầu:** Cho giá trị các cây nấm theo trình tự từ trái sang phải. Hãy xác định tổng giá trị nấm Mario hái được.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa $10$ số nguyên dương là giá trị các cây nấm (theo thứ tự từ trái sang phải).

## Dữ liệu ra:
- Ghi ra một số nguyên là tổng giá trị nấm Mario hái được (gần $100$ nhất).

## Ví dụ:
### Dữ liệu vào:
```
1 2 3 5 8 13 21 34 55 79
```

### Dữ liệu ra:
```
110
```

**Giải thích:** Mario hái các cây nấm số $7,8$ và $9$ sẽ được tổng giá trị là $21+34+55=110$.
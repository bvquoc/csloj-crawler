BGH nhà trường đang có kế hoạch làm mái che sân trường để có điều kiện thời tiết thuận lợi tổ chức các chương trình ngoài sân trường. Sân trường là một hình chữ nhật kích thước m×n được chia thành lưới ô vuông ~m~ hàng, ~n~ cột. Một số ô trên sân trường có đang trồng cây (mỗi ô nếu có cây thì chỉ có một cây). BGH muốn làm một mái che là một hình chữ nhật con nằm trong sân trường có các cạnh song song với các cạnh sân trường và có diện tích bằng đúng ~k~ ô vuông. Mong muốn của BGH là số lượng cây nằm dưới mái che là ít nhất có thể. Em hãy giúp BGH tính số lượng ít nhất các cây nằm dưới mái che.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương ~m, n, k~ được ghi cách nhau bởi dấu cách;
- ~m~ dòng sau, mỗi dòng chứa một xâu ký tự độ dài ~n~ chỉ gồm các ký tự `0`, `1` mô tả một hàng của sân trường (ký tự `0` tương ứng với không có cây, ký tự `1` tương ứng với có cây).

## Dữ liệu ra:
- Một số nguyên duy nhất là số lượng ít nhất các cây nằm dưới mái che. Nếu không thể làm được mái che với diện tích đúng bằng ~k~ thì ghi ra ~-1~.
## Ví dụ:
#### Dữ liệu vào:
```
3 4 6
0110
1000
1001
```

#### Dữ liệu ra:
```
1
```

#### Giải thích:
- Làm mái che là hình chữ nhật ~2×3~ có ô trên trái là ~(2, 2)~, dưới phải là ~(3,4)~, có diện tích bằng ~6~ và chỉ chứa duy nhất một cây ở ô ~(3, 4)~ (như hình dưới)
<center><img src="/images/problems/467/cover.png" width=250px></center>

## Giới hạn:
Trong tất cả các test: ~1 ≤ m, n ≤ 500; k ≤ m×n~. Trong đó:
- **Subtask** ~\#1: 40\%~ số điểm có ~m, n ≤ 20~;
- **Subtask** ~\#2: 30\%~ số điểm có ~m, n ≤ 50~;
- **Subtask** ~\#3: 30\%~ số điểm còn lại không có ràng buộc gì thêm.
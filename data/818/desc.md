**<center>TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XⅤ (SƠN LA 2019)</center>**
<br>

Pha lê Swarovski được dùng làm đồ trang sức vô cùng đẹp và vô cùng giá trị. Các hạt pha lê gồm rất nhiều loại khác nhau, mỗi loại được ký hiệu đại diện bởi một số nguyên dương không vượt quá $10^9$. Trong một lần thám hiểm vùng rừng rậm Amazon, đoàn thám hiểm đã tìm thấy một chuỗi rất dài gồm $n$ hạt pha lê được gắn liên tiếp nhau. Trước khi đưa về nghiên cứu, người ta quyết định cắt chuỗi hạt tìm thấy thành các chuỗi con gồm các hạt liên tiếp có cùng độ dài. Khi đó độ đa dạng của từng chuỗi hạt là số lượng loại hạt khác nhau tồn tại trong chuỗi hạt đó. Độ đa dạng trong một cách cắt chuỗi ban đầu là độ đa dạng nhỏ nhất của các chuỗi tạo thành.

**Yêu cầu**: Hãy xác định số lượng cách cắt chuỗi hạt, độ dài chuỗi hạt con và độ đa dạng của từng cách cắt tương ứng.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n\ (n≤5.10^5)$ xác định số lượng hạt trong chuỗi ban đầu.
- Dòng thứ hai chứa $n$ số nguyên dương $a_1,a_2,a_3,…,a_n \ (1≤i≤n)$ xác định loại của các hạt trong chuỗi theo thứ tự.


## Dữ liệu ra:
- Dòng đầu chứa số nguyên dương $k$ là số lượng cách cắt chuỗi ban đầu thành các chuỗi con cùng độ dài. 
- $k$ dòng tiếp theo, dòng thứ $i\ (1≤i≤k)$ chứa $2$ số nguyên dương $x_i , y_i$ với $x_i$ là kích thước các chuỗi con mới theo cách cắt thứ $i$ và $y_i$ là độ đa dạng của cách cắt tìm được. Các cách cắt liệt kê theo thứ tự tăng dần của của kích thước chuỗi hạt con.

## Ví dụ:
### Dữ liệu vào:
```
6
1 2 2 4 3 3
```

### Dữ liệu ra:
```
4
1 1
2 1
3 2
6 4
```

## Giới hạn:
- Có $30\%$ số test tương ứng $30\%$ số điểm có $a_1=a_2=⋯=a_n≤2; n≤100$
- Có $20\%$ số test khác tương ứng $20\%$ số điểm có $a_i≤2,1≤i≤n≤100$
- Có $20\%$ số test khác tương ứng $20\%$ số điểm có $n≤5.10^4$
- $30\%$ số test còn lại tương ứng $30\%$ số điểm không có ràng buộc gì thêm.
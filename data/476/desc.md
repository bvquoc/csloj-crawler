**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN CHUYÊN QUỐC HỌC - HUẾ)</center>**

Trong kỳ nghỉ hè sắp tới, Bờm được giao nhiệm vụ thu hoạch ~K~ kg ngô trên cánh đồng của gia đình được chia thành ~MxN~ ô vuông và lượng ngô tại mỗi ô đã biết. Các hàng được đánh số từ ~1~ đến ~M~ từ trên xuống dưới, các cột được đánh số từ ~1~ đến ~N~ từ trái sang phải. Để tiện cho việc quản lí, Bờm phải chọn ra một khu đất có hình chữ nhật trên cánh đồng để thu hoạch. Vì không muốn mất nhiều thời gian, Bờm phải tìm ra khu đất có diện tích nhỏ nhất sao cho vẫn đủ ngô để thu hoạch, nếu có nhiều khu đất có diện tích bằng nhau và cùng thu đủ ~K~ kg ngô thì chọn khu đất thu được nhiều ngô nhất. Hãy giúp Bờm thực hiện công việc này!

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên ~M, N, K~;
- Dòng thứ ~i~ trong ~M~ dòng tiếp theo ghi ~N~ số nguyên không âm, trong đó số thứ ~j~ là ~a_{ij}~ cho biết lượng ngô tại ô ~(i, j)~.

Hai số liên tiếp trên cùng một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Nếu không tồn tại vùng nào cho đủ lượng ngô cần thu hoạch, in ra ~-1~. Ngược lại in ra trên một dòng hai số nguyên gồm diện tích khu đất và khối lượng ngô thu được, hai số được ghi cách nhau bởi dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
3 3 19
5 4 0
4 7 0
0 0 2
```

#### Dữ liệu ra:
```
4 20
```

#### Giới hạn:
- ~1 ≤ M, N ≤ 500; 1 ≤ K ≤ 10^9; 0 ≤ a_i ≤ 10^4~. Tổng lượng ngô không vượt quá ~2\times 10^9~.
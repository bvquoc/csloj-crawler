**<center>NGUỒN: VOI 2018 - 2019</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Ông Hàm là chủ một trang trại nuôi bò có dạng hình đa giác lồi ~N~ đỉnh. Cổng của trang trại là một cạnh của đa giác, kí hiệu là ~(a, b)~, với ~a, b~ là hai đỉnh của đa giác. Mùa đông lạnh giá đang tới, ông xây dựng hệ thống sưởi cho đàn bò của mình như sau:

Đầu tiên ông đặt tại mỗi đỉnh đa giác một cột đèn sưởi, dây điện nói liên thông giữa một số cột đèn với nhau. Vì lý do an toàn nên ông thiết kế dây điện chỉ chạy trên các đoạn thẳng men theo các cạnh của đa giác mà không đi vào bên trong trang trại và không chạy ngang qua cạnh ~(a, b)~. Ông đặt hai cầu dao tổng tại hai đỉnh ~a, b~ nhằm đưa nguồn điện từ bên ngoài vào hệ thống đèn sưởi bắt đầu từ ~a, b~. Đề tiết kiệm chỉ phí, ngoài cạnh ~(a, b)~ ông không cho chạy dây qua một cạnh dài nhất trong số các cạnh còn lại của đa giác. Sau khi hoàn thành ông tính ra tổng độ dài dây điện sử dụng là khá lớn, nên ông quyết định tiết kiệm tối đa dây điện sử dụng trong việc dẫn nguồn điện vào.

Nhằm đảm bảo nguồn điện liên tục cho hệ thống đèn sưởi của trang trại, ông chủ trang trại tìm cách đi dây sao cho tất cả đèn sưởi đều có hai nguồn điện đi tới. Trong trường hợp có một nguồn điện bị mất thì vẫn còn một nguồn điện dự phòng cung cấp. Ông quyết định phương án đi dây điện ngầm từ hai nguồn điện đến hai đỉnh ~a, b~, ký hiệu vị trí hai nguồn điện đó là ~c~ và ~d~. Lưu ý rằng dây điện không nhất thiết phải chạy riêng rẽ trực tiếp từ từng nguồn điện đến hai đỉnh ~a, b~, mà có thể đi chung và rẽ nhánh ở một số điểm trên đường đi, nhưng phải đảm bảo mỗi đỉnh ~a, b~ đều có cách dẫn điện từ cả hai nguồn ~c, d~ theo hệ thống dây điện mới thiết kế. Do đường điện đi ngầm nên các dây điện có thể chạy bên trong trang trại hoặc trên cạnh ~(a, b)~. Ngoài ra ông còn phát hiện ra bốn điểm ~a, b,c, d~, có vị trí liên hệ đặc biệt với nhau (được mô tả chỉ tiết trong phần ràng buộc của bài toán).

Hình vẽ dưới đây minh họa một cách đi dây điện. Đa giác biểu diễn trang trại bao gồm các đỉnh ~a, g, b, ƒ, h~ với ~(a, b)~ là cổng và ~(g, h)~ là cạnh dài nhất khác cạnh ~(a, b)~ nên không được nối. Các đoạn nét liền mô tả đi dây dọc theo các cạnh của đa giác. Các đoạn nét đứt mô tả việc đi dây từ hai nguồn ~c, d~ tới hai đỉnh ~a, b~. Bốn điểm ~a, b, c, d~ tạo thành một hình vuông và ~e~ là điểm rẽ nhánh. Tổng độ dài lượng dây điện sử dụng trong hình vẽ bằng tổng độ dài các đoạn:

~~[a,e]+[b,e]+[c,e]+[d,e]+[a,f]+[f,g]+[b,h]~~

<center><img src="/images/problems/1517/efill.png" width=300px></center>

**Yêu cầu:** Biết tọa độ vị trí các đỉnh của đa giác và tọa độ vị trí của hai nguồn điện, hãy giúp ông Hàm thiết kế đi dây điện sao cho tổng độ đài dây điện sử dụng là ít nhất. Độ dài dây điện được tính bằng tổng độ dài đoạn đường mà dây đi qua, quanh các cạnh của đa giác và từ hai nguồn điện đến ~a, b~.

## Dữ liệu vào:
- Dòng thứ nhất chứa một số nguyên ~N~ là số đỉnh của đa giác;
- Dòng thứ hai chứa hai số nguyên ~x_a, y_a~ là tọa độ của đỉnh ~a~;
- Dòng thứ ba chứa hai số nguyên ~x_b, y_b~ là tọa độ của đỉnh ~b~;
- Mỗi dòng trong số ~N - 2~ dòng tiếp theo chứa hai số nguyên ~x, y~ là tọa độ một trong số ~N-2~ đỉnh còn lại của đa giác.
- Dòng cuối cùng chứa bốn số nguyên ~x_c, y_c, x_d, y_d~ là các tọa độ tương ứng của vị trí hai nguồn điện ~c~ và ~d~.

**Lưu ý:** Trong dữ liệu vào, các đỉnh của đa giác không nhất thiết được liệt kê theo một thứ tự nhất định cho trước. Dữ liệu đảm bảo không có ba đỉnh nào của đa giác thẳng hàng. Tất cả tọa độ cho trong dữ liệu vào nằm trong khoảng ~[-10^8, 10^8]~. Các số trên cùng một dòng cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số duy nhất là độ dài dây điện tìm được. Số in ra cần làm tròn đến ~2~ chữ số sau dấu phẩy.

## Giới hạn:
- Có ~30\%~ số lượng test ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~3 \le N \le 100~, các tọa độ đỉnh của đa giác được liệt kê xuôi chiều kim đồng hỗ theo trình tự xuất hiện trong file dữ liệu vào, và bốn vị trí ~a, b, c, d~ cùng nằm trên một đường thăng;

- ~30\%~ số lượng test khác ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~3 \le N \le 10~, các tọa độ của ~a, b, c, d~ nằm trong khoảng ~[-5, 5]~, và đường thẳng đi qua hai điểm ~c, d~ là đường trung trực của đoạn thắng ~[a, b]~, đồng thời ~c, d~ thuộc cùng một nửa mặt phẳng tạo bởi đường thẳng đi qua ~a, b~;
- ~20\%~ số lượng test khác ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~3 \le N \le 100~, và đường thẳng đi qua hai điểm ~c, d~ là đường trung trực của đoạn thăng ~[a, b]~, đồng thời ~c, d~ thuộc cùng một nửa mặt phẳng tạo bởi đường thẳng đi qua ~a, b~;
- ~20\%~ số lượng test còn lại ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~3 \le N \le 100~, và bốn đỉnh ~a, b, c, d~ tạo thành một hình vuông.

## Ví dụ:
#### Dữ liệu vào:
```
4
4 0
0 0
0 4
4 4
-1 0 5 0
```

#### Dữ liệu ra:
```
14.00
```

#### Giải thích:
<center><img src="/images/problems/1517/efill2.png" width=250px></center>

Trong ví dụ trên, các đoạn dây điện nối dọc theo các cạnh của đa giác bao gồm: ~a~ nối
với ~ƒ~ và ~b~ nối với ~e~. Ngoài cạnh ~(a, b)~, một cạnh dài nhât không được nối dây là cạnh ~(e, f)~. Cách
kết nối từ vị trí hai nguôn điện ~c~ và ~d~ tới ~a~ và ~b~ sử dụng ít dây điện nhất là nối ~a~ với ~d~, nối ~a~ với ~b~,
và nôi ~b~ với ~c~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)
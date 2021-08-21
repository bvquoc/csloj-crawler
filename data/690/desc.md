**<center>NGUỒN: Đề Thi Olympic IOI 2003</center>**

Những con bò của bác nông dân John muốn được tự do đi lại giữa ~N\ (1≤N≤1000)~ cánh đồng (đánh số từ ~1~ đến ~N~) của trang trại, mặc dù giữa các cánh đồng bị ngăn cách bởi những rừng cây. Các con bò muốn sử dụng những tuyến đường mòn nối liền  các cặp cánh đồng để đi. Bò có thể di chuyển trên các con đường theo cả hai chiều.

Các con bò không tự làm được đường, thay vào đó, chúng sử dụng đường đi của động vật hoang dã mà chúng phát hiện ra. Hàng tuần, các con bò cần lựa chọn một số hay tất cả tuyến đường chúng biết để duy trì.

Đầu mỗi tuần, các con bò lại phát hiện thêm một đường đi mới của động vật hoang dã. Chúng phải quyết định tập hợp các con đường mà chúng phải duy trì sao cho trong tuần đó chúng có thể đi lại từ cánh đồng này tới cánh đồng khác một cách bất kỳ. Bò chỉ có thể sử dụng các con đường mà hiện chúng đang duy trì khi di chuyển. Các con bò luôn mong muốn tổng chiều dài các đường mòn phải duy trì là nhỏ nhất. Bò có thể chọn duy trì bất kỳ con dường nào mà chúng biết, dù cho con đường đi đó có được duy trì ở tuần trước hay không. Đường đi của động vật hoang dã (kể cả khi được duy trì) không bao giờ thẳng. Hai tuyến đường nối cùng một cặp cánh đồng có thể có chiều dài khác nhau. Các tuyến đường cũng có thể cắt nhau, tuy nhiên bò không thay đổi đường đi trừ khi chúng ở trên cánh đồng.

Cứ vào đầu tuần, các con bò sẽ cho bạn biết đường đi mới của động vật hoang dã mà chính chúng vừa phát hiện ra được. Chương trình của bạn phải chỉ ra tổng ngắn nhất chiều dài của các con đường mà bò cần duy trì để trong tuần đó, chúng có thể đi đến mọi cánh đồng, tất nhiên, nếu tồn tại các tuyến đường như vậy.

## Dữ liệu vào:
- Dòng đầu tiên bao gồm hai số nguyên cách nhau bởi khoảng trắng, ~N~ và ~W~, trong đó ~W~ là số tuần mà chương trình cần tính toán ~(1≤W≤6000)~.
- Với mỗi tuần, đọc một dòng chứa thông tin về đường đi của động vật hoang dã được phát hiện. Dòng này chứa ba số nguyên, cách nhau bởi dấu cách bao gồm số hiệu các cánh đồng hai đầu đường đi và chiều dài con đường ~(1…10000)~. Số hiệu cánh đồng hai đầu các tuyến đường luôn luôn khác nhau.

## Dữ liệu ra:
- Ngay sau khi biết thông tin về đường đi của động vật hoang dã mới được phát hiện, chương trình của bạn cần đưa ra một dòng trên đó bao gồm tổng chiều dài ngắn nhất các con đường mà bò phải duy trì. Nếu không tồn tại các đường đi cho phép bò di chuyển đến mọi cánh đồng, đưa ra số ~-1~. Chương trình của phải phải kết thúc ngay sau khi xử lý tuần cuối cùng.

## Ví dụ:
#### Dữ liệu vào:
```
4 6
1 2 10
1 3 8
3 2 3
1 4 3
1 3 6
2 1 2
```

#### Dữ liệu ra:
```
-1
-1
-1
14
12
8
```
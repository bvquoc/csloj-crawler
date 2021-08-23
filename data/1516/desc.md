**<center>NGUỒN: VOI 2018 - 2019</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Công ty LDK đang sản xuất robot vận chuyển hàng hóa tự động trên mặt phẳng. Để làm việc đó, công ty tiến hành huấn luyện các robot trên một địa hình phẳng được chia thành một lưới các ô vuông gồm $3$ dòng (đánh số từ $1$ đến $3$ theo chiều từ trên xuống dưới) và $n$ cột (đánh số từ $1$ đến $n$ theo chiều từ trái sang phải). Ô giao giữa dòng $i$, cột $j$ được gọi là ô $(i, j)$ và thuộc một trong $5$ loại dưới đây:
1.  Ô xuất phát, kí hiệu là $S$
2.  Ô kết thúc, kí hiệu là $T$
3. Ô trồng, kí hiệu là $.$
4.  Ô cắm, kí hiệu là $\#$
5.  Ô kém chất lượng, kí hiệu là $*$
<center><img src="/images/problems/1516/robot.png" width=400px></center>

Một đường thử nghiệm cho robot là một dãy liên tiếp các ô chung cạnh, bắt đầu tại một ô $S$, kết thúc tại một ô $T$ và thỏa mãn các điều kiện sau:
- Không chứa ô cấm;
- Không chứa ô $S, T$ nào khác;
- Số ô kém chất lượng không quá một ô.

**Yêu cầu:** Cho biết thông tin các ô của lưới, hãy giúp công ty tìm phương án thiết kế có nhiều đường thử nghiệm nhất mà mỗi ô của lưới thuộc không quá một đường thử nghiệm.

## Dữ liệu vào:
- Dòng thứ nhất chứa một số nguyên dương $n$;
- Dòng thứ $i$ trong số $3$ dòng tiếp theo chứa xâu mô tả thông tin các ô liên tiếp trên hàng thứ $i$ của lưới.

## Dữ liệu ra:
- Ghi ra một số nguyên là số đường thử nghiệm nhiều nhất tìm được.

## Ví dụ:
### Dữ liệu vào:
```
10
T.*S..##S#
**###T#T.S
.*S.*.##T#
```

### Dữ liệu ra:
```
3
```

## Giới hạn:
- Có $30\%$ số test ứng với $30\%$ số điểm của bài thỏa mãn điều kiện: $n \le 100$, không có ô kém chất lượng và các ô thuộc hàng $2$ và hàng $3$ của địa hình đều là ô cấm;
- $30\%$ số test khác ứng với $30\%$ số điểm của bài thỏa mãn điều kiện: $n \le 100$ và địa hình không có ô kém chất lượng;
- $30\%$ số test khác ứng với $30\%$ số điểm của bài thỏa mãn điều kiện: $n\le 10^5$ và các ô thuộc hàng $3$ của địa hình đều là ô cấm;
- $10\%$ số test còn lại ứng với $10\%$ số điểm của bài thỏa mãn điều kiện: $\le 10^5$ và không có điều kiện gì thêm trên địa hình.
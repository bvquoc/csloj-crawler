**<center>Nguồn: Ôn HN tháng 11/2017, Thầy Lê Minh Hoàng, Ngày 1</center>**

Để có công việc làm thêm cho những X-men, giáo sư X mở thêm trường dạy chó X-dogs. Trường có ~𝑛~ con chó đánh số từ ~1~ tới ~𝑛~. Mỗi con chó có thể bất hòa với không quá ~3~ con chó khác. Giả thiết quan hệ bất hòa ở đây là quan hệ hai chiều, tức là nếu con chó ~𝑎~ bất hòa với con chó ~𝑏~ thì con chó ~𝑏~ cũng bất hòa với con chó ~𝑎~ và ngược lại.

Hàng ngày các X-men có nhiệm vụ dắt chó đi dạo. Để giúp lũ chó được thoải mái, hạn chế việc xảy ra xung đột diện rộng, các X-men muốn chia ~𝑛~ con chó vào hai nhóm đi hai nơi khác nhau sao cho trong mỗi nhóm, mỗi con chó bất hòa với không quá ~1~ con chó khác.

**Yêu cầu:** Hãy giúp chia các con chó thành hai nhóm thỏa mãn yêu cầu trên.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~𝑛 ≤ 3×10^5~;
- Dòng thứ ~𝑖~ trong ~𝑛~ dòng tiếp theo chứa không quá ~4~ số: số đầu là số lượng những con chó bất hòa với con chó thứ ~𝑖~, tiếp theo là chỉ số của các con chó đó.

## Dữ liệu ra:
- Dòng đầu ghi từ `YES` nếu có phương án chia ~𝑛~ con chó vào hai nhóm thỏa mãn yêu cầu, ghi từ `NO` nếu không tồn 
tại phương án;
- Trong trường hợp có tồn tại phương án chia nhóm:
    - Dòng hai ghi chỉ số các con chó trong nhóm thứ nhất;
    - Dòng ba ghi chỉ số các con chó trong nhóm thứ hai.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ:
<center><img src="/images/problems/1215/GROUPDIV.svg" width="300px" /></center>

#### Dữ liệu vào:
```
7
3 2 3 4
3 1 3 6
2 1 2
2 1 5
1 4
1 2
0
```

#### Dữ liệu ra:
```
YES
1 4 6 7
2 3 5
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)
**<center>NGUỒN: PreVNOI Ⅷ (BẮC NINH 2018)</center>**
<br>

Sau khi vô địch **AFF Cup 2018**, đội tuyển bóng đá **Việt Nam** được một doanh nghiệp thưởng nóng bằng trò chơi bảng chứa vàng. Trong trò chơi, mỗi cầu thủ phải di chuyển trên một bảng hình chữ nhật $m×n$, các hàng được đánh số từ $1$ đến $m$ từ trên xuống dưới, các cột được đánh số từ $1$ đến $n$ từ trái qua phải. Ô ở hàng $i$ cột $j$ ghi số $a_{ij}$.

Mỗi cầu thủ được yêu cầu đi từ ô $(u,v)$ tới ô $(p,q)\  (1≤u< p≤m,1≤v< q≤n)$. Tại mỗi bước, cầu thủ chỉ được đi từ trên xuống dưới hoặc từ trái sang phải qua các ô kề cạnh, cứ đi qua ô nào (tính cả ô xuất phát và ô kết thúc), cầu thủ được nhận số vàng bằng số ghi trong trong ô đó.

Các cầu thủ vốn rất thông minh và tìm ra cách đi để đạt được số vàng tối đa được thưởng, tuy nhiên có một cổ động viên đối phương do cay cú nên muốn phá game. Anh ta gây sự bằng cách nhảy vào bảng chiếm trọn một ô, trừ ô xuất phát $(u,v)$ và ô kết thúc $(p,q)$. Trong trường hợp cổ động viên quá khích này nhảy vào ô thì cầu thủ không lấy được vàng tương ứng với số điểm trong ô đó. Cổ động viên này muốn tìm một ô để ngồi chiếm sao cho trong chiến thuật tối ưu của mỗi cầu thủ, tổng số điểm lớn nhất có thể nhận được là tối thiểu.

**Yêu cầu**: Cho bảng $m×n$ với các giá trị $|a_{ij}|< 10^6$. Với $k$ lượt đi của các cầu thủ biểu diễn bởi $4$ số $u,v,p,q$. Hãy “an ủi” cổ động viên này bằng cách xác định tổng số vàng mà cầu thủ nhận được trong mỗi lượt nếu cổ động viên chọn được đúng ô tốt nhất có thể để chiếm theo mô tả trên.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên $m,n,k$
- $m$ dòng tiếp theo, dòng thứ $i$ chứa $n$ số nguyên $a_{i1},a_{i2},…,a_{in}$
- $k$ dòng cuối, mỗi dòng chứa bốn số nguyên dương $u,v,p,q$

## Dữ liệu ra:
- Ghi ra $k$ dòng, dòng thứ $i$ chứa một số nguyên là số điểm mà cầu thủ nhận được ở lượt chơi thứ $i$ nếu cổ động viên xấu tính đó chọn được ô tốt nhất

## Giới hạn:
- $30\%$ số test có $m,n,k≤30$
- $30\%$ số test khác có $m,n,k≤100$
- $40\%$ số test còn lại có $m,n,k≤300$

## Ví dụ:
#### Dữ liệu vào:
```
3 4 2
5 2 4 2 
3 2 6 8
7 8 9 3
1 1 3 4
1 2 2 4
```

#### Dữ liệu ra:
```
28
16
```

#### Giải thích:
- Trong ví dụ thứ nhất, chiếm ô $(3,3)$. Trong ví dụ thứ hai, chiếm ô $(2,3)$.
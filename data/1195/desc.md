**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Có $n$ quả bóng bay, mỗi quả có một trong số $4$ màu $\{R,B,G,Y\}$ xếp thành một cột. Ở mỗi bước được phép chọc thủng dãy bóng cùng màu từ $2$ quả trở lên. Nếu dãy bị chọc thủng có $k$ quả thì điểm số nhận được ở bước đi đó là $k^2$. Các quả bóng ở trên sẽ rơi xuống lấp chổ trống trong cột.

**Ví d:ụ** cột ban đầu có $10$ bóng, tính từ trên xuống cột có cấu hình $BBGGBBYYY$. Để chọc thủng hết dãy bóng, ta có thể chọc $2$ quả liên tiếp $BB,GG,BB,YYY$. Khi đó, điểm số nhận được sẽ là$2^2+2^2+2^2+3^2=21$. Có cách khác để nhận được tổng điểm số cao hơn là $GG,BBBB,YYY$ với tổng điểm $2^2+4^2+3^2=29$.

**Yêu cầu:** Cho xâu $S$ độ dài $n$ chỉ chứa các ký tự trong tập $\{R,B,G,Y\}$ xác định màu các quả bóng tính từ trên xuống dưới. Hãy xác định tổng điểm số lớn nhất nhận được khi phá hết bóng trong cột. Nếu không thể phá hết bóng thì tổng điểm là $0$.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $T\ (1≤T≤5)$ là số lượng test;
- $T$ dòng tiếp, mỗi dòng ghi một xâu $S$.

## Dữ liệu ra:
- Ghi ra kết quả mỗi test trên một dòng dưới dạng số nguyên theo thứ tự nhập.

## Ví dụ:
#### Dữ liệu vào:
```
4
BBGGBBYYY
BGGGB
BGGBGGGG
GBGB
```

#### Dữ liệu ra:
```
29
13
24
0
```

## Giới hạn:
- **Subtask** $\#1: n≤10$;
- **Subtask** $\#2: n≤200$; chỉ có $2$ màu $G,B$;
- **Subtask** $\#3: n≤200$.